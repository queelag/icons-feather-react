import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherNavigationElement } from '@aracna/icons-feather-web/elements/navigation-element'

export const IconFeatherNavigation: ElementComponent<IconFeatherNavigationElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherNavigationElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-navigation', IconFeatherNavigationElement)
