import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronRightElement } from '@aracna/icons-feather-web/elements/chevron-right-element'

export const IconFeatherChevronRight: ElementComponent<IconFeatherChevronRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevron-right', IconFeatherChevronRightElement)
