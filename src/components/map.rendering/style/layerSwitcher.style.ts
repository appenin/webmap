export const layerSwitcherContainerStyle = [
  '[&_.layer-switcher]:absolute',
  '[&_.layer-switcher]:text-left',
  '[&_.layer-switcher]:right-[1rem]',
  '[&_.layer-switcher]:top-[6rem]',
];

export const layerSwitcherButtonStyle = [
  '[&_.layer-switcher_button]:flex',
  '[&_.layer-switcher_button]:text-transparent',
  '[&_.layer-switcher_button]:w-[50px]',
  '[&_.layer-switcher_button]:h-[50px]',
  '[&_.layer-switcher_button]:bg-center',
  "[&_.layer-switcher_button]:bg-[url('/assets/icons/layers.svg')]",
  '[&_.layer-switcher_button]:bg-no-repeat',
  '[&_.layer-switcher_button]:border-[none]',
  '[&_.layer-switcher_button:hover]:scale-[120%]',
  '[&_.layer-switcher_button]:border-solid',
  '[&_.layer-switcher_button]:border-[0.01rem]',
  '[&_.layer-switcher_button]:border-[black]',
  '[&_.layer-switcher_button]:p-3',
  '[&_.layer-switcher_button]:rounded-[10%]',
  '[&_.layer-switcher_button]:bg-[white]',
];

export const layerSwitcherShownStyle = [
  '[&_.layer-switcher.shown.layer-switcher-activation-mode-click_>_button]:bg-[white]',
  '[&_.layer-switcher.shown_button]:hidden',
  '[&_.layer-switcher.shown]:flex',
  '[&_.layer-switcher.shown]:flex-col',
  '[&_.layer-switcher.shown]:max-h-[calc(100%_-_5.5em)]',
  '[&_.layer-switcher.shown.layer-switcher-activation-mode-click_>_button]:flex',
  '[&_.layer-switcher.shown.layer-switcher-activation-mode-click_>_button]:absolute',
  '[&_.layer-switcher.shown.layer-switcher-activation-mode-click_>_button]:right-[0rem]',
  '[&_.layer-switcher.shown.layer-switcher-activation-mode-click_>_button]:top-[0rem]',
  '[&_.layer-switcher.shown.layer-switcher-activation-mode-click_>_button]:text-transparent',
  "[&_.layer-switcher.shown.layer-switcher-activation-mode-click_>_button]:bg-[url('/assets/icons/layers.svg')]",
  '[&_.layer-switcher.shown.layer-switcher-activation-mode-click_>_button]:bg-[rgba(0,255,255,0)]',
  '[&_.layer-switcher.shown_.panel]:relative',
  '[&_.layer-switcher.shown_.panel]:grid',
  '[&_.layer-switcher.shown_.panel]:left-[-4.5rem]',
  '[&_.layer-switcher.shown_.panel]:resize-y',
  '[&_.layer-switcher.shown_.panel]:overflow-auto',
];

export const layerSwitcherPanelStyle = [
  '[&_.layer-switcher_.panel]:rounded',
  '[&_.layer-switcher_.panel]:bg-[rgba(255,255,255,0.898)]',
  '[&_.layer-switcher_.panel]:border-[black]',
  '[&_.layer-switcher_.panel]:hidden',
  '[&_.layer-switcher_.panel]:max-h-[inherit]',
  '[&_.layer-switcher_.panel]:h-full',
  '[&_.layer-switcher_.panel]:box-border',
  '[&_.layer-switcher_.panel]:overflow-y-auto',
  '[&_.layer-switcher_.panel]:border-[0.01rem]',
  '[&_.layer-switcher_.panel]:border-solid',
];

export const layerSwitcherUlStyle = [
  '[&_.layer c-switcher_ul]:list-none',
  '[&_.layer-switcher_ul]:mx-[0.4em]',
  '[&_.layer-switcher_ul]:my-[1.6em]',
  '[&_.layer-switcher_ul]:pl-0',
  '[&_.layer-switcher_ul_ul]:mt-[0.1em]',
  '[&_.layer-switcher_ul_ul]:mb-0',
  '[&_.layer-switcher_ul_ul]:mx-0',
  '[&_.layer-switcher_ul_ul]:pl-[1.2em]',
];

export const layerSwitcherLiStyle = [
  '[&_.layer-switcher_li.group_+_li.group]:mt-[0.4em]',
  '[&_.layer-switcher_li.group_+_li.layer-switcher-base-group]',
  '[&_.layer-switcher_li]:relative',
  '[&_.layer-switcher_li]:mt-[0.3em]',
  '[&_.layer-switcher_li_input]:absolute',
  '[&_.layer-switcher_li_input]:h-[1em]',
  '[&_.layer-switcher_li_input]:w-[1em]',
  '[&_.layer-switcher_li_input]:text-[1em]',
  '[&_.layer-switcher_li_input]:left-[1.2em]',
  '[&_.layer-switcher_li_label]:inline-block',
  '[&_.layer-switcher_li_label]:mt-px',
  '[&_.layer-switcher_li_label]:pl-[2.7em]',
  '[&_.layer-switcher_li_label]:pr-[1.2em]',
  '[&_.layer-switcher_li.group_>_label]:font-bold',

  '[&_li.layer-switcher-base-group_>_label]:pl-[1.2em]',
  '[&_.layer-switcher.layer-switcher-group-select-style-none_li.group_>_label]:pl-[1.2em]',
];

export const layerSwitcherPanelButtonStyle = [
  '[&_.layer-switcher_.group_button]:absolute',
  '[&_.layer-switcher_.group_button]:inline-block',
  '[&_.layer-switcher_.group_button]:align-top',
  '[&_.layer-switcher_.group_button]:float-none',
  '[&_.layer-switcher_.group_button]:text-[1rem]',
  '[&_.layer-switcher_.group_button]:w-[1rem]',
  '[&_.layer-switcher_.group_button]:h-[1em]',
  '[&_.layer-switcher_.group_button]:bg-[center_2px]',
  '[&_.layer-switcher_.group_button]:transition-transform',
  '[&_.layer-switcher_.group_button]:duration-[0.2s]',
  '[&_.layer-switcher_.group_button]:left-0',
  '[&_.layer-switcher_.group_button]:mr-[10rem]',
  '[&_.layer-switcher_.group_button]:bg-none',
  '[&_.layer-switcher_.group_button]:bg-cover',

  '[&_.layer-switcher_input]:m-0',
  '[&_.layer-switcher_.group.layer-switcher-close_button]:float-right',
  '[&_.layer-switcher_.group.layer-switcher-close_button]:px-6',
];

export const layerSwitcherPanelFolderStyle = [
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-close_>_ul]:overflow-hidden',
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-close_>_ul]:h-0',

  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-close_>_input]:hidden',
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-close_>_label]:pointer-events-none',
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-close_>_button]:bg-[rgba(255,255,255,0)]',
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-close_>_button]:w-full',
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-close_>_button]:border-none',

  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-open_>_input]:hidden',
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-open_>_label]:pointer-events-none',
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-open_>_button]:bg-[rgba(255,255,255,0)]',
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-open_>_button]:w-full',
  '[&_.layer-switcher_.group.layer-switcher-fold.layer-switcher-open_>_button]:border-none',
];
