import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFeatherElement } from '@aracna/icons-feather-web/elements/feather-element.js'

export const IconFeatherFeather: ElementComponent<IconFeatherFeatherElement, IconProps> = createBaseElementComponent<
  IconFeatherFeatherElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-feather', IconFeatherFeatherElement)
