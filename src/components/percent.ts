import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPercentElement } from '@aracna/icons-feather-web/elements/percent-element'

export const IconFeatherPercent: ElementComponent<IconFeatherPercentElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPercentElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-percent', IconFeatherPercentElement)
