import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherToggleLeftElement } from '@aracna/icons-feather-web/elements/toggle-left-element'

export const IconFeatherToggleLeft: ElementComponent<IconFeatherToggleLeftElement, IconProps> = createBaseElementComponent<
  IconFeatherToggleLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-toggle-left', IconFeatherToggleLeftElement)
