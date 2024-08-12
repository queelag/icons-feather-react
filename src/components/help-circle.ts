import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherHelpCircleElement } from '@aracna/icons-feather-web/elements/help-circle-element'

export const IconFeatherHelpCircle: ElementComponent<IconFeatherHelpCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHelpCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-help-circle', IconFeatherHelpCircleElement)
