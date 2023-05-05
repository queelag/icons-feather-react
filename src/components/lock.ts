import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLockElement } from '@aracna/icons-feather-web/elements/lock-element.js'

export const IconFeatherLock: ElementComponent<IconFeatherLockElement, IconProps> = createBaseElementComponent<
  IconFeatherLockElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-lock', IconFeatherLockElement)
