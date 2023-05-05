import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMenuElement } from '@aracna/icons-feather-web/elements/menu-element.js'

export const IconFeatherMenu: ElementComponent<IconFeatherMenuElement, IconProps> = createBaseElementComponent<
  IconFeatherMenuElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-menu', IconFeatherMenuElement)
