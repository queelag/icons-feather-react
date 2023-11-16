import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowUpRightElement } from '@aracna/icons-feather-web/elements/arrow-up-right-element'

export const IconFeatherArrowUpRight: ElementComponent<IconFeatherArrowUpRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowUpRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-up-right', IconFeatherArrowUpRightElement)
