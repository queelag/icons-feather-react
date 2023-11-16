import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowRightElement } from '@aracna/icons-feather-web/elements/arrow-right-element'

export const IconFeatherArrowRight: ElementComponent<IconFeatherArrowRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-right', IconFeatherArrowRightElement)
