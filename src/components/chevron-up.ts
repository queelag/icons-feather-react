import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronUpElement } from '@aracna/icons-feather-web/elements/chevron-up-element.js'

export const IconFeatherChevronUp: ElementComponent<IconFeatherChevronUpElement, IconProps> = createBaseElementComponent<
  IconFeatherChevronUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevron-up', IconFeatherChevronUpElement)
