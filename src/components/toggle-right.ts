import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherToggleRightElement } from '@aracna/icons-feather-web/elements/toggle-right-element'

export const IconFeatherToggleRight: ElementComponent<IconFeatherToggleRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherToggleRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-toggle-right', IconFeatherToggleRightElement)
