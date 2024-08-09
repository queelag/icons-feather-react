import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherToggleLeftElement } from '@aracna/icons-feather-web/elements/toggle-left-element'

export const IconFeatherToggleLeft: ElementComponent<IconFeatherToggleLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherToggleLeftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-toggle-left', IconFeatherToggleLeftElement)
