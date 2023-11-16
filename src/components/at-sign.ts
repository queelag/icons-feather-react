import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAtSignElement } from '@aracna/icons-feather-web/elements/at-sign-element'

export const IconFeatherAtSign: ElementComponent<IconFeatherAtSignElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAtSignElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-at-sign', IconFeatherAtSignElement)
