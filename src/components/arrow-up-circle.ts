import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowUpCircleElement } from '@aracna/icons-feather-web/elements/arrow-up-circle-element'

export const IconFeatherArrowUpCircle: ElementComponent<IconFeatherArrowUpCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowUpCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-up-circle', IconFeatherArrowUpCircleElement)
