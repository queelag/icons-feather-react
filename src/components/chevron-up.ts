import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherChevronUpElement } from '@aracna/icons-feather-web/elements/chevron-up-element'

export const IconFeatherChevronUp: ElementComponent<IconFeatherChevronUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChevronUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-chevron-up', IconFeatherChevronUpElement)
