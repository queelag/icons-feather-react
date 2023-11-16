import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPercentElement } from '@aracna/icons-feather-web/elements/percent-element'

export const IconFeatherPercent: ElementComponent<IconFeatherPercentElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPercentElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-percent', IconFeatherPercentElement)
