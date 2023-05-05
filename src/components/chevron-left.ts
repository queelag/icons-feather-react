import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronLeftElement } from '@aracna/icons-feather-web/elements/chevron-left-element.js'

export const IconFeatherChevronLeft: ElementComponent<IconFeatherChevronLeftElement, IconProps> = createBaseElementComponent<
  IconFeatherChevronLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevron-left', IconFeatherChevronLeftElement)
