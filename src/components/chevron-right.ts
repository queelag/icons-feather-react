import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronRightElement } from '@aracna/icons-feather-web/elements/chevron-right-element.js'

export const IconFeatherChevronRight: ElementComponent<IconFeatherChevronRightElement, IconProps> = createBaseElementComponent<
  IconFeatherChevronRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevron-right', IconFeatherChevronRightElement)
