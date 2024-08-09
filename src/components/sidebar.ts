import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSidebarElement } from '@aracna/icons-feather-web/elements/sidebar-element'

export const IconFeatherSidebar: ElementComponent<IconFeatherSidebarElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSidebarElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-sidebar', IconFeatherSidebarElement)
