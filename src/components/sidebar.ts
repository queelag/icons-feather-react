import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSidebarElement } from '@aracna/icons-feather-web/elements/sidebar-element'

export const IconFeatherSidebar: ElementComponent<IconFeatherSidebarElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSidebarElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-sidebar', IconFeatherSidebarElement)
