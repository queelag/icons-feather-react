import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowLeftElement } from '@aracna/icons-feather-web/elements/arrow-left-element'

export const IconFeatherArrowLeft: ElementComponent<IconFeatherArrowLeftElement, IconProps> = createBaseElementComponent<
  IconFeatherArrowLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-left', IconFeatherArrowLeftElement)
