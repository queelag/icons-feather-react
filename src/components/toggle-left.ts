import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherToggleLeftElement } from '@aracna/icons-feather-web/elements/toggle-left-element'

export const IconFeatherToggleLeft: ElementComponent<IconFeatherToggleLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherToggleLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-toggle-left', IconFeatherToggleLeftElement)
