import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSkipBackElement } from '@aracna/icons-feather-web/elements/skip-back-element'

export const IconFeatherSkipBack: ElementComponent<IconFeatherSkipBackElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSkipBackElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-skip-back', IconFeatherSkipBackElement)
