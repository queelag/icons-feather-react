import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronDownElement } from '@aracna/icons-feather-web/elements/chevron-down-element.js'

export const IconFeatherChevronDown: ElementComponent<IconFeatherChevronDownElement, IconProps> = createBaseElementComponent<
  IconFeatherChevronDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevron-down', IconFeatherChevronDownElement)
