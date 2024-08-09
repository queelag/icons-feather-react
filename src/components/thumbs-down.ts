import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherThumbsDownElement } from '@aracna/icons-feather-web/elements/thumbs-down-element'

export const IconFeatherThumbsDown: ElementComponent<IconFeatherThumbsDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherThumbsDownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-thumbs-down', IconFeatherThumbsDownElement)
