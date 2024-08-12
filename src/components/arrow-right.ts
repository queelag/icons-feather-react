import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowRightElement } from '@aracna/icons-feather-web/elements/arrow-right-element'

export const IconFeatherArrowRight: ElementComponent<IconFeatherArrowRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-right', IconFeatherArrowRightElement)
