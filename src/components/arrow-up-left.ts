import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowUpLeftElement } from '@aracna/icons-feather-web/elements/arrow-up-left-element'

export const IconFeatherArrowUpLeft: ElementComponent<IconFeatherArrowUpLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowUpLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-up-left', IconFeatherArrowUpLeftElement)
