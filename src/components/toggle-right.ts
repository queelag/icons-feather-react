import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherToggleRightElement } from '@aracna/icons-feather-web/elements/toggle-right-element'

export const IconFeatherToggleRight: ElementComponent<IconFeatherToggleRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherToggleRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-toggle-right', IconFeatherToggleRightElement)
