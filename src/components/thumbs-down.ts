import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherThumbsDownElement } from '@aracna/icons-feather-web/elements/thumbs-down-element'

export const IconFeatherThumbsDown: ElementComponent<IconFeatherThumbsDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherThumbsDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-thumbs-down', IconFeatherThumbsDownElement)
