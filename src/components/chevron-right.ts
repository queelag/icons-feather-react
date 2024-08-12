import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChevronRightElement } from '@aracna/icons-feather-web/elements/chevron-right-element'

export const IconFeatherChevronRight: ElementComponent<IconFeatherChevronRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chevron-right', IconFeatherChevronRightElement)
