import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHelpCircleElement } from '@aracna/icons-feather-web/elements/help-circle-element'

export const IconFeatherHelpCircle: ElementComponent<IconFeatherHelpCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHelpCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-help-circle', IconFeatherHelpCircleElement)
