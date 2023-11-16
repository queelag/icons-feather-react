import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronLeftElement } from '@aracna/icons-feather-web/elements/chevron-left-element'

export const IconFeatherChevronLeft: ElementComponent<IconFeatherChevronLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevron-left', IconFeatherChevronLeftElement)
