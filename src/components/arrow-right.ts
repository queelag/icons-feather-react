import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowRightElement } from '@aracna/icons-feather-web/elements/arrow-right-element'

export const IconFeatherArrowRight: ElementComponent<IconFeatherArrowRightElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-right', IconFeatherArrowRightElement)
