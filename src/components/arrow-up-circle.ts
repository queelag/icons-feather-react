import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowUpCircleElement } from '@aracna/icons-feather-web/elements/arrow-up-circle-element'

export const IconFeatherArrowUpCircle: ElementComponent<IconFeatherArrowUpCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowUpCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-up-circle', IconFeatherArrowUpCircleElement)
