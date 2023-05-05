import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherNavigation2Element } from '@aracna/icons-feather-web/elements/navigation-2-element.js'

export const IconFeatherNavigation2: ElementComponent<IconFeatherNavigation2Element, IconProps> = createBaseElementComponent<
  IconFeatherNavigation2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-navigation-2', IconFeatherNavigation2Element)
