import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSkipForwardElement } from '@aracna/icons-feather-web/elements/skip-forward-element.js'

export const IconFeatherSkipForward: ElementComponent<IconFeatherSkipForwardElement, IconProps> = createBaseElementComponent<
  IconFeatherSkipForwardElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-skip-forward', IconFeatherSkipForwardElement)
