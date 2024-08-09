import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowLeftElement } from '@aracna/icons-feather-web/elements/arrow-left-element'

export const IconFeatherArrowLeft: ElementComponent<IconFeatherArrowLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowLeftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-left', IconFeatherArrowLeftElement)
