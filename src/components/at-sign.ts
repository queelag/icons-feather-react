import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAtSignElement } from '@aracna/icons-feather-web/elements/at-sign-element'

export const IconFeatherAtSign: ElementComponent<IconFeatherAtSignElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAtSignElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-at-sign', IconFeatherAtSignElement)
