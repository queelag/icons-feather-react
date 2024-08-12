import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPercentElement } from '@aracna/icons-feather-web/elements/percent-element'

export const IconFeatherPercent: ElementComponent<IconFeatherPercentElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPercentElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-percent', IconFeatherPercentElement)
