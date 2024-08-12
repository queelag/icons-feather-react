import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherNavigationElement } from '@aracna/icons-feather-web/elements/navigation-element'

export const IconFeatherNavigation: ElementComponent<IconFeatherNavigationElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherNavigationElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-navigation', IconFeatherNavigationElement)
