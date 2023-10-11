import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherNavigationElement } from '@aracna/icons-feather-web/elements/navigation-element'

export const IconFeatherNavigation: ElementComponent<IconFeatherNavigationElement, IconProps> = createBaseElementComponent<
  IconFeatherNavigationElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-navigation', IconFeatherNavigationElement)
