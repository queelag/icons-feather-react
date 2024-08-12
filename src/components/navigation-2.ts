import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherNavigation2Element } from '@aracna/icons-feather-web/elements/navigation-2-element'

export const IconFeatherNavigation2: ElementComponent<IconFeatherNavigation2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherNavigation2Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-navigation-2', IconFeatherNavigation2Element)
