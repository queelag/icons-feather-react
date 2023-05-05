import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherThumbsDownElement } from '@aracna/icons-feather-web/elements/thumbs-down-element.js'

export const IconFeatherThumbsDown: ElementComponent<IconFeatherThumbsDownElement, IconProps> = createBaseElementComponent<
  IconFeatherThumbsDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-thumbs-down', IconFeatherThumbsDownElement)
