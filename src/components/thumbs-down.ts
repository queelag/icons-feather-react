import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherThumbsDownElement } from '@aracna/icons-feather-web/elements/thumbs-down-element'

export const IconFeatherThumbsDown: ElementComponent<IconFeatherThumbsDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherThumbsDownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-thumbs-down', IconFeatherThumbsDownElement)
