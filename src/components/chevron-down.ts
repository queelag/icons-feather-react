import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronDownElement } from '@aracna/icons-feather-web/elements/chevron-down-element'

export const IconFeatherChevronDown: ElementComponent<IconFeatherChevronDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevron-down', IconFeatherChevronDownElement)
