import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSkipForwardElement } from '@aracna/icons-feather-web/elements/skip-forward-element'

export const IconFeatherSkipForward: ElementComponent<IconFeatherSkipForwardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSkipForwardElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-skip-forward', IconFeatherSkipForwardElement)
