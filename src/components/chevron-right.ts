import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronRightElement } from '@aracna/icons-feather-web/elements/chevron-right-element'

export const IconFeatherChevronRight: ElementComponent<IconFeatherChevronRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevron-right', IconFeatherChevronRightElement)
