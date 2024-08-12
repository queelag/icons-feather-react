import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMenuElement } from '@aracna/icons-feather-web/elements/menu-element'

export const IconFeatherMenu: ElementComponent<IconFeatherMenuElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMenuElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-menu', IconFeatherMenuElement)
