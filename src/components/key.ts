import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherKeyElement } from '@aracna/icons-feather-web/elements/key-element'

export const IconFeatherKey: ElementComponent<IconFeatherKeyElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherKeyElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-key', IconFeatherKeyElement)
