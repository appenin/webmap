#!/bin/bash
git clone --single-branch --branch "$FALCO_OPS_BRANCH"  https://gitlab-ci-token:${CI_JOB_TOKEN}@gitlab.com/appenin/falco-ops.git
echo "application_git_repo: git@gitlab.com:appenin/falco-webmap.git" >> falco-ops/sites/ansible_extra_vars.yml
echo "application_version: $APPLICATION_VERSION" >> falco-ops/sites/ansible_extra_vars.yml
echo "application_environment: $DEPLOY_ENVIRONMENT" >> falco-ops/sites/ansible_extra_vars.yml
[[ ! -z "$JOB_MONITORING_URL" ]] && echo "job_monitoring_url: $JOB_MONITORING_URL" >> falco-ops/sites/ansible_extra_vars.yml
cd falco-ops
git-crypt unlock
ansible-galaxy install -r requirements.yml

if [ "${ZERO_DOWNTIME,,}" = "yes" ]; then
    echo "##### Deploy Webmap to $DEPLOY_ENVIRONMENT in 0 downtime mode #####"
    echo 'ansible-playbook -i "'inventory.$DEPLOY_ENVIRONMENT'" --tags "app, zerodowntime, certificate-check-only" --extra-vars "@sites/ansible_extra_vars.yml" sites/carto.appenin.fr.yml'
    ansible-playbook -i "inventory.$DEPLOY_ENVIRONMENT" --tags "app, zerodowntime, certificate-check-only" --extra-vars "@sites/ansible_extra_vars.yml" sites/carto.appenin.fr.yml
else
    echo "##### Deploy Webmap to $DEPLOY_ENVIRONMENT in parallel mode #####"
    echo "rolling_deployment_step: '100%'" >> sites/ansible_extra_vars.yml
    echo 'ansible-playbook -i "'inventory.$DEPLOY_ENVIRONMENT'" --tags "app" --extra-vars "@sites/ansible_extra_vars.yml" sites/carto.appenin.fr.yml'
    ansible-playbook -i "inventory.$DEPLOY_ENVIRONMENT" --tags "app" --extra-vars "@sites/ansible_extra_vars.yml" sites/carto.appenin.fr.yml
fi
